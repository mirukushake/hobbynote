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
} from '@nestjs/common';
import {
  FileFieldsInterceptor,
  FileInterceptor,
} from '@nestjs/platform-express';
import { EmbroideryDesignService } from './embroidery-design.service';
import { CreateEmbroideryDesignDto } from './dto/create-embroidery-design.dto';
import { UpdateEmbroideryDesignDto } from './dto/update-embroidery-design.dto';
import { finished } from 'stream';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from 'src/common/file-upload.utils';
import MulterGoogleCloudStorage from 'multer-cloud-storage';
import * as path from 'path';

@Controller('embroidery-design')
export class EmbroideryDesignController {
  constructor(
    private readonly embroideryDesignService: EmbroideryDesignService,
  ) {}

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'finishedimage', maxCount: 1 },
        { name: 'designimage', maxCount: 1 },
      ],
      {
        storage: new MulterGoogleCloudStorage({
          projectId: process.env.PROJECT_ID,
          keyFilename: path.join(__dirname, '../../gcloud-info.json'),
          bucket: process.env.STORAGE_MEDIA_BUCKET,
          uniformBucketLevelAccess: true,
          filename: editFileName,
        }),
      },
    ),
  )
  create(
    @UploadedFiles()
    files,
    @Body() createEmbroideryDesignDto: CreateEmbroideryDesignDto,
  ) {
    return this.embroideryDesignService.create(
      files,
      createEmbroideryDesignDto,
    );
  }

  // @Post()
  // create(@Body() createEmbroideryDesignDto: CreateEmbroideryDesignDto) {
  //   return this.embroideryDesignService.create(files, createEmbroideryDesignDto);
  // }

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  findAll() {
    return this.embroideryDesignService.findAll();
  }

  @Get(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  findOne(@Param('id') id: number) {
    return this.embroideryDesignService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmbroideryDesignDto: UpdateEmbroideryDesignDto,
  ) {
    return this.embroideryDesignService.update(+id, updateEmbroideryDesignDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.embroideryDesignService.remove(+id);
  }
}
