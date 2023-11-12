# Back-End Server 
The portfolio server is an application that enables the showcasing of projects, storing messages sent in the database, and sending response emails to message senders.

# Technologies Used
- TypeScript
- Express
- Prisma
- PostgreSQL
- Nodemailer

# EndPoints
- GET /projects: This endpoint facilitates the listing of portfolio projects.

- POST /contacts: This endpoint is used to receive and store sent messages. The data is saved in the database. Additionally, the server sends a confirmation email to the sender.
