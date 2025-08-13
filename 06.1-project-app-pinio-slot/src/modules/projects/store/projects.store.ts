import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Project } from '../interfaces/project.interface';
import { v4 as uuidv4 } from 'uuid';

const initiaLoad = (): Project[] => {
  return [
    {
      id: uuidv4(),
      name: 'Project 1',
      tasks: [],
    },
    {
      id: uuidv4(),
      name: 'Project 2',
      tasks: [],
    },
  ];
};

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref<Project[]>(initiaLoad());
  const addProjects = (name: string) => {
    if (name.trim().length === 0) return;

    projects.value.push({
      id: uuidv4(),
      name: name,
      tasks: [],
    });

  };

  return {
    // properties
    projects,

    // Getters
    projectList: computed(() => [...projects.value]),

    // actions
    addProjects,
  };
});
