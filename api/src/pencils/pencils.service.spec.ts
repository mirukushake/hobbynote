import { Test, TestingModule } from '@nestjs/testing';
import { PencilsService } from './pencils.service';

describe('PencilsService', () => {
  let service: PencilsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PencilsService],
    }).compile();

    service = module.get<PencilsService>(PencilsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
