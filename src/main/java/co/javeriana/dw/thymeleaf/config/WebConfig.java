package co.javeriana.dw.thymeleaf.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // Excluye /h2-console/** del manejador de recursos estáticos
        registry.addResourceHandler("/h2-console/**")
                .addResourceLocations("classpath:/h2-console/");
    }
}