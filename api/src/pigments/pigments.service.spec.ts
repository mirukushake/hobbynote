import { Test, TestingModule } from '@nestjs/testing';
import { PigmentsService } from './pigments.service';

describe('PigmentsService', () => {
  let service: PigmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PigmentsService],
    }).compile();

    service = module.get<PigmentsService>(PigmentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
