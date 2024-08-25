import {z} from 'zod';

export interface CourseExploreProps {
  courses: {
    id: string
    name: string
    image: string | null
    author: {
      name: string | null
      image: string | null
    }
  }[]
}