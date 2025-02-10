'use client'
import DialogModal, { openModal } from '@/components/actions/DialogModal'
import ProjectForm from './components/ProjectForm'
import { CardContent } from '@/components/layouts/cards/CardContent'

export default function Project() {
  return (
    <>
      <DialogModal id="project-form">
        <h2 className="text-2xl font-bold">Create Project</h2>
        <ProjectForm />
      </DialogModal>
      <CardContent
        title="Projects"
        actions={
          <>
            <button className="btn" onClick={() => openModal('project-form')}>
              <i className="bx bx-message-square-add"></i>
            </button>
          </>
        }
      ></CardContent>
    </>
  )
}
