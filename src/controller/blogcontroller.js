// const { Op } = require('sequelize');

const postCategory = require("../models/postCategory");


const addNewPost = async (req, res) => {
  try{
  const { userAuthor, title, content } = req.body;
  //const { userId } = req.params.id;
  
  if (!title || !content) {
    return res.status(400).json({ message: 'Some required fields are missing' })  
  }
  const newPost = new postCategory({
   userAuthor ,title ,content
  })

  const savedPost = await newPost.save()
  res.status(201).json({ message: "New Post Saved", savedPost })
}
catch (error) {
res.status(500).json({ message: error.message })
}
};


const getPosts = async (req, res) =>  {
    try {
      const allPosts = await postCategory.find({}, null);
      res.status(200).json(allPosts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    };
  };


const getPostById = async (req, res) => {
  try{  
  const { title, content } = req.body
  const { id } = req.params
  const findPost = await postCategory.findById(id)
  
  if (findPost == null) {
      return res.status(404).json({ message: "invalid ID" })
  }

  findPost.title = title || findPost.title
  findPost.content = content || findPost.content

            const savedPost = await findPost.save()
            res.status(200).json({ message: "Post Found", savedPost })
        } 
    catch (error) {
        res.status(500).json({ message: error.message })
    }
  };



const changePost = async (req, res) => {
  try {
    const { userAuthor,title, content } = req.body
    const { id } = req.params
    const findPost = await postCategory.findById(id)

      if (findPost == null) {
          return res.status(404).json({ message: "ID not Found" })
      }
      
  findPost.userAuthor = userAuthor || findPost.userAuthor 
  findPost.title = title || findPost.title
  findPost.content = content || findPost.content

  const savedPost = await findPost.save()
  res.status(200).json({ message: "Sucess! Post Updated", savedPost })
}catch (error) {
res.status(500).json({ message: error.message })
}
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const findPost = await postCategory.findById(id);
    if (findPost == null) {
      return res.status(404).json({ message: `Post not found` })
    };
    await findPost.remove();
    res.status(200).json({ message: `Post successfully deleted` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  };
};

/* const deletePost = async (id) => {
  await BlogPost.destroy({ where: { id } });
  return { status: 204 };
}; */
/* const searchPosts = async (string) => {
  const posts = await BlogPost.findAll({
      where: {
        [Op.or]: [{ title: { [Op.like]: `%${string}%` } }, 
                   { content: { [Op.like]: `%${string}%` } },
      ] },
      include: [
        { model: User,
          as: 'user', 
          attributes: { exclude: ['password'] },
        },
        {
          model: Category,
          as: 'categories',
          through: { attributes: [] },
        },
      ],
  });
   return posts;
}; */
module.exports = {
  addNewPost,
  getPosts,
  getPostById,
  changePost,
  deletePost,
  // searchPosts,
};