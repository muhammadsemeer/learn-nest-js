import { IsEnum, IsString, MinLength } from 'class-validator';

export class CreateNinjaDto {
  @MinLength(3)
  @IsString()
  name: string;

  @IsEnum(['Clan 1', 'Clan 2'], {
    message: 'Clan must be either "Clan 1" or "Clan 2"',
  })
  clan: string;
}
