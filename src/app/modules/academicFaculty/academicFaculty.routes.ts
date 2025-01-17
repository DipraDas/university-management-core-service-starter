import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicFacultyController } from './academicFaculty.controller';
import { AcademicFacultyValidation } from './academicFaculty.validation';

const router = express.Router();

router.post('/',
    validateRequest(AcademicFacultyValidation.create),
    AcademicFacultyController.insertIntoDB)

export const AcademicFacultyRoutes = router;