import { Document, ObjectId } from 'mongodb'

export interface ITransactions extends Document {
  _id: string | ObjectId
  author: string | ObjectId
  title: string
  description?: string
  amount: number
  type: -1 | 1
  money: 'cash' | 'bank'
  onDate: Date
  slip?: string
  responsible: string
  category?: string
  createdAt: Date
  updatedAt: Date
}