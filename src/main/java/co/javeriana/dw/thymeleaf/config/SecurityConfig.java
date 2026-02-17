package co.javeriana.dw.thymeleaf.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http
        .authorizeHttpRequests(auth -> auth
            .requestMatchers("/h2-console/**").permitAll() // ← explícito
            .anyRequest().permitAll()
        )
        .csrf(csrf -> csrf
            .ignoringRequestMatchers("/contacto", "/h2-console/**")
        )
        .headers(headers -> headers
            .frameOptions(frame -> frame.sameOrigin())
        );
    return http.build();
}
}