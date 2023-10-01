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
} from '@nestjs/common';
import { MediaService } from './media.service';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import MulterGoogleCloudStorage from 'multer-cloud-storage';
import { FilesInterceptor } from '@nestjs/platform-express';
import * as path from 'path';
import { editFileName, imageFileFilter } from 'src/common/file-upload.utils';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post()
  @UseInterceptors(
    FilesInterceptor('file', null, {
      storage: new MulterGoogleCloudStorage({
        projectId: process.env.PROJECT_ID,
        keyFilename: path.join(__dirname, '../../gcloud-info.json'),
        bucket: process.env.STORAGE_MEDIA_BUCKET,
        uniformBucketLevelAccess: true,
        filename: editFileName,
      }),
    }),
  )
  async save(@UploadedFiles() file, @Body() body: any): Promise<any> {
    console.log(file);
    return file[0].filename;
  }

  @Get()
  findAll() {
    return this.mediaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mediaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMediaDto: UpdateMediaDto) {
    return this.mediaService.update(+id, updateMediaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mediaService.remove(+id);
  }
}
