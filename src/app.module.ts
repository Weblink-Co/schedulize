import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        if (config.get<string>('NODE_ENV') === "production") return {
          type: 'postgres',
          host: config.get<string>("DATABASE_HOST"),
          port: config.get<number>("DATABASE_PORT"),
          username: config.get<string>("DATABASE_USER"),
          password: config.get<string>("DATABASE_PASSWORD"),
          database: config.get<string>("DATABASE_NAME"),
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: true,
        }
        return {
          type: "sqlite",
          database: '.dev/database.sqlite',
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: true,
        }
      }
    })

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
