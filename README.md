# Proyecto: CreditSmart

---

## Nombre del estudiante
**Juan Pablo Yara Cifuentes**

---

## Descripción breve del proyecto

**CreditSmart** es una aplicación web desarrollada con **React + Vite y JavaScript**, orientada a la gestión y solicitud de créditos financieros.

El proyecto evolucionó de una aplicación que almacenaba datos solo en memoria a un sistema con **persistencia real en la nube**, utilizando **Firebase Firestore** como base de datos NoSQL.

La plataforma permite:

1. **Visualizar los tipos de crédito** disponibles.
2. **Simular un crédito** ingresando monto, plazo y tipo de crédito.
3. **Registrar solicitudes de crédito** y guardarlas de forma permanente en la nube.
4. **Consultar las solicitudes registradas**, accesibles para múltiples usuarios.
5. Mantener los datos incluso al **cerrar o recargar el navegador**.

La aplicación utiliza navegación con **React Router**, manejo de estado con **useState** y conexión a Firebase para la persistencia de datos.

---

## Implementación con Firebase

Para cumplir los requisitos del proyecto se realizó:

- Creación de una **aplicación web en Firebase**
- Habilitación de **Firestore Database**
- Configuración de Firebase dentro del proyecto React
- Uso de **variables de entorno** para proteger las credenciales
- Integración completa de Firestore para guardar y consultar solicitudes

---

## Cómo ejecutar el proyecto

### Repositorio del proyecto
https://github.com/juanpabloyaracifuentes89-dotcom/actividadReact.git

---

### 1. Clonar el repositorio
```bash
git clone https://github.com/juanpabloyaracifuentes89-dotcom/actividadReact
cd actividadReact
