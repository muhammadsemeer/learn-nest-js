import { PartialType } from '@nestjs/mapped-types';
import { CreateNinjaDto } from './createNinjaDto';

export class UpdateNinjaDto extends PartialType(CreateNinjaDto) {}
