import { Router } from 'express'
import { body, param } from 'express-validator'
import { ProjectController } from '../controllers/ProjectController'
import { handleInputErrors } from '../middleware/validations'
import { TaskController } from '../controllers/TaskController'
import { validateProjectExists } from '../middleware/project'


const router = Router()

//CREAR PROYECTO
router.post('/',  
    body('projectName')
    .notEmpty().withMessage('El Nombre del Proyecto es Obligatório'),
    body('clientName')
    .notEmpty().withMessage('Nombre del Cliente es Obligatório'),
    body('description')
    .notEmpty().withMessage('Disculpe la descripción es Obligatória'),
    handleInputErrors,
    ProjectController.createProject
)
//GENERAL
router.get('/',  ProjectController.getAllProjects)

//PROYECTOS POR ID
router.get('/:id', 
    param('id').isMongoId().withMessage('ID no Válido'),
    handleInputErrors,
    ProjectController.getProjectById
)
 //ACTUALIZAR PROYECTO
router.put('/:id', 
    param('id').isMongoId().withMessage('ID no Válido'),
    body('projectName')
    .notEmpty().withMessage('El Nombre del Proyecto es Obligatório'),
    body('clientName')
    .notEmpty().withMessage('Nombre del Cliente es Obligatório'),
    body('description')
    .notEmpty().withMessage('Disculpe la descripción es Obligatória'),
    handleInputErrors,
    ProjectController.updateProject
)
//BORRAR PROYECTO
router.delete('/:id', 
    param('id').isMongoId().withMessage('ID no Válido'),
    handleInputErrors,
    ProjectController.deleteProject
)


/** Routes para las tareas Task*/
router.param('projectId', validateProjectExists)

//CREAR TAREA

router.post('/:projectId/task',
   body('name')
    .notEmpty().withMessage('El Nombre de la tarea es Obligatório'),
    body('description')
    .notEmpty().withMessage('Disculpe la descripción de la tarea es Obligatória'),
    handleInputErrors,
    TaskController.createTask
    
)
//BUSCAR TAREA POR ID
router.get('/:projectId/tasks',
TaskController.getProjectTask
)

//BUSCAR TAREA POR ID Y ID DEL PROYECTO
router.get('/:projectId/tasks/:taskId',
    param('taskId').isMongoId().withMessage('ID no Válido'),
    handleInputErrors,
    TaskController.getTaskById
    )

export default router

