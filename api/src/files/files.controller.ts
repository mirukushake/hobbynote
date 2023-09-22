import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
  ClassSerializerInterceptor,
  UploadedFile,
} from '@nestjs/common';
import {
  FileFieldsInterceptor,
  FileInterceptor,
} from '@nestjs/platform-express';
import { finished } from 'stream';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from 'src/common/file-upload.utils';

const defaultConfig = diskStorage({
  destination: './public/images',
  filename: editFileName,
});

@Controller('files')
export class FileController {
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: defaultConfig,
      fileFilter: imageFileFilter,
    }),
  )
  upload(@UploadedFile() file: Express.Multer.File) {
    return file;
  }
}
