# Modern Swagger Theme

A easy to implement modern and practical theme for Swagger UI.

## Installation

```bash
npm install modern-swagger-theme
```

## Usage

This package exports a customCss and customJs **strings** that you can add in most swagger-ui implementations.

Use in nestjs:

```ts
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { customJs, customCss } from "modern-swagger-theme";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("API Example")
    .setDescription("Example API using custom-swagger-theme")
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // Set up Swagger with custom theme
  SwaggerModule.setup("docs", app, document, {
    customCss: customCss,
    customJsStr: customJs,
  });

  await app.listen(3000);
}

bootstrap();
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
