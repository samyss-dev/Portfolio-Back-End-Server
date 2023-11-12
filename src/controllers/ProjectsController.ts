import { prisma } from "../settings/db";

export class ProjectsController {
  private static _instance = new ProjectsController();

  private constructor() {}

  static get instance() {
    return this._instance;
  }

  async findAll() {
    const [projects, technologies] = await Promise.all([
      prisma.project.findMany(),
      prisma.technology.findMany(),
    ]);

    return projects.map((project) => ({
      ...project,
      technologies: technologies
        .filter((technology) => technology.projectId === project.id)
        .map((technology) => technology.name),
    }));
  }
}
