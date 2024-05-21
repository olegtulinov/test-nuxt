import axios from "~/node_modules/axios/index";
import type { ProjectCategories } from "~/types/project-categories";
import type { Projects } from "~/types/projects";

export default defineStore('main', () => {
    const projects = ref<Projects>([])
    const projectCategories = ref<ProjectCategories>([])
    const filteredId = ref<Number | null>()
    const filteredItems = computed(() => projects.value.filter((item) => {
        if (filteredId.value) {
            return item.categories[0].id === filteredId.value
        }

        return true
    }))

    const setFilteredCategories = (id: number) => {
        filteredId.value = id
    }

    async function getProjects() {
        const response = await axios.get('https://api.test.cyberia.studio/api/v1/projects');
        projects.value = response.data.items;
    }

    async function getProjectCategories() {
        const response = await axios.get('https://api.test.cyberia.studio/api/v1/project-categories');
        projectCategories.value = response.data.items;
    }

    return {
        projectCategories,
        filteredId,
        projects,
        filteredItems,
        setFilteredCategories,
        getProjects,
        getProjectCategories,
    }
})