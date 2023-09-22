import { Test, TestingModule } from '@nestjs/testing';
import { FlossService } from './floss.service';

describe('FlossService', () => {
  let service: FlossService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlossService],
    }).compile();

    service = module.get<FlossService>(FlossService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
