# ARMTOME

Ejemplo base en Kotlin para una app Android de detección de objetos/personas en tiempo real usando CameraX + ML Kit.

## Dependencias recomendadas (Gradle)

```kotlin
// build.gradle (Module: app)
dependencies {
    implementation("androidx.camera:camera-camera2:1.3.3")
    implementation("androidx.camera:camera-lifecycle:1.3.3")
    implementation("androidx.camera:camera-view:1.3.3")

    implementation("com.google.mlkit:object-detection:17.0.1")
}
```

## Notas
- Asegúrate de habilitar la cámara en el manifest (`android.permission.CAMERA`).
- El ejemplo muestra etiquetas con confianza en un overlay simple de texto.
