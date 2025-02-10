'use client'

import { signIn } from 'next-auth/react'

export default function Login() {
  const googleAuth = async function () {
    await signIn('google')
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        {/* <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
        /> */}
        <div>
          <h1 className="text-5xl font-bold">Welcome Back!</h1>
          <p className="py-6">
            Manage your budget effortlessly. Sign in with Google to get started.
          </p>
          <button className="btn btn-outline min-w-96" onClick={googleAuth}>
            <i className="bx bx-bxl-google"></i>
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  )
}
