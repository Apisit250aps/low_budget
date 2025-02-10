import { db } from '@/client'
import { Document, ObjectId } from 'mongodb'

export interface IProject extends Document {
  _id: string | ObjectId
  name: string
  description?: string
  notification?: string
  createdAt?: Date
  updatedAt?: Date
}

const projects = db.collection<IProject>('projects')
export default projects
