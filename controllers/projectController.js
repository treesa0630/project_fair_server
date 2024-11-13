const project = require("../model/projectModel");


exports.addProjectController = async (req, res) => {
    console.log('inside add project controller');

    const { title, language, github, website, overview } = req.body
    console.log(title, language, github, website, overview);

    const projectImage = req.file.filename
    console.log(projectImage);

    const userId = req.payload
    console.log(userId);



    try {
        const existingProject = await project.findOne({ github })
        if (existingProject) {
            res.status(406).json('Project already exist')
        }
        else {
            const newProject = new project({
                title, language, github, website, overview, projectImage, userId
            })
            await newProject.save()
            res.status(200).json(newProject)
        }
    } catch (error) {
        res.status(401).json('Project adding failed due to', error)
    }

    // res.status(200).json('Request received')
}


// get all rpojects
exports.getAllProjectsController = async (req, res) => {
    // path parameter = req.param
    // query parameter = req.query
    const searchKey = req.query.search
    console.log(searchKey);

    const query = {
        language: {
            $regex: searchKey, $options: "i"
        }
    }


    try {
        const allprojects = await project.find(query)
        res.status(200).json(allprojects)
    } catch (error) {
        res.status(401).json(error)
    }

}


// get home projects
exports.getHomeProjectsController = async (req, res) => {
    try {
        const allprojects = await project.find().limit(3)
        res.status(200).json(allprojects)
    } catch (error) {
        res.status(401).json(error)
    }

}


// get user project
exports.getUserProjectsController = async (req, res) => {
    const userId = req.payload
    try {
        const allprojects = await project.find({ userId })
        res.status(200).json(allprojects)
    } catch (error) {
        res.status(401).json(error)
    }

}


// remove user project
exports.removeUserProjectController = async (req, res) => {
    const { id } = req.params

    try {
        await project.findByIdAndDelete({ _id: id })
        res.status(200).json('deleted successfully')
    }
    catch (error) {
        res.status(401).json(error)
    }
}


// update user project
exports.editProjectController = async (req, res) => {
    const { id } = req.params
    const userId = req.payload

    const { title, language, github, website, overview, projectImage } = req.body

    const uploadedImage = req.file ? req.file.filename : projectImage

    try {
        const existingProject = await project.findByIdAndUpdate({ _id:id }, {
            title,
            language,
            github,
            website,
            overview,
            projectImage: uploadedImage,
            userId
        }, { new: true })

        await existingProject.save()
        res.status(200).json(existingProject)

    } catch (error) {
        res.status(406).json(error)
    }
}