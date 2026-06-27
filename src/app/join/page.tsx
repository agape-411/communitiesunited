'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, HardHat, ArrowLeft } from 'lucide-react'
import CoalitionForm from '../../../components/join/CoalitionForm'
import Workforce from '../../../components/join/WorkForce'

import { useRouter } from 'next/navigation'

export default function JoinPage() {
  const [activeTab, setActiveTab] = useState<'coalition' | 'workforce'>(
    'coalition',
  )

  const router = useRouter()

  return (
    <main className='bg-[#F6F0E6] min-h-screen'>
      {/* HERO */}

      <section id='join' className='bg-[#16352A] text-white py-18 lg:py-25'>
        <div className='max-w-7xl mx-auto px-6 lg:px-10'>
          <button
            onClick={() => router.back()}
            className='
              inline-flex
              items-center
              gap-2
              text-white/80
              hover:text-[#C89A3E]
              transition-colors
              mb-7
              text-sm
              font-semibold
              uppercase
              tracking-wider
            '
          >
            <ArrowLeft size={18} />
            Back
          </button>
        </div>
        <div className='max-w-7xl mx-auto px-6 lg:px-10'>
          <div className='max-w-4xl'>
            <p
              className='
                uppercase
                tracking-[0.3em]
                text-xs
                font-bold
                text-[#C89A3E]
              '
            >
              Join CUFD
            </p>

            <h1
              className='
                mt-5
                font-serif
                font-bold
                text-4xl
                md:text-6xl
                leading-tight
              '
            >
              Join the Movement.
              <br />
              Build Rocky Mount's Future.
            </h1>

            <p
              className='
                mt-6
                text-lg
                text-white/80
                max-w-3xl
                leading-8
              '
            >
              Whether you want to advocate for fair development or register for
              future workforce opportunities, your voice and participation
              matter.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}

      <section className='py-20 lg:py-24'>
        <div className='max-w-7xl mx-auto px-6 lg:px-10'>
          {/* TAB SWITCHER */}

          <div
            className='
              bg-white
              rounded-2xl
              border
              border-[#DED4C5]
              overflow-hidden
              shadow-sm
            '
          >
            <div
              className='
                flex
                flex-col
                sm:flex-row
              '
            >
              <button
                onClick={() => setActiveTab('coalition')}
                className={`
                  flex-1
                  px-6
                  py-6
                  text-left
                  transition-all
                  border-b-4
                  ${
                    activeTab === 'coalition'
                      ? 'border-[#16352A] bg-[#F6F0E6]'
                      : 'border-transparent'
                  }
                `}
              >
                <div className='flex items-start gap-4'>
                  <Users size={28} className='text-[#16352A]' />

                  <div>
                    <h3
                      className='
                        text-xl
                        font-bold
                        text-[#16352A]
                      '
                    >
                      Join the Coalition
                    </h3>

                    <p className='text-gray-600 mt-2'>
                      Organize, advocate, attend meetings, and help shape Rocky
                      Mount's future.
                    </p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setActiveTab('workforce')}
                className={`
                  flex-1
                  px-6
                  py-6
                  text-left
                  transition-all
                  border-b-4
                  ${
                    activeTab === 'workforce'
                      ? 'border-[#16352A] bg-[#F6F0E6]'
                      : 'border-transparent'
                  }
                `}
              >
                <div className='flex items-start gap-4'>
                  <HardHat size={28} className='text-[#16352A]' />

                  <div>
                    <h3
                      className='
                        text-xl
                        font-bold
                        text-[#16352A]
                      '
                    >
                      Workforce Registry
                    </h3>

                    <p className='text-gray-600 mt-2'>
                      Register interest in future construction, trades, and
                      facility operations opportunities.
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* PANEL */}

          <div className='mt-12'>
            <AnimatePresence mode='wait'>
              {activeTab === 'coalition' && (
                <motion.div
                  key='coalition'
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -30,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                >
                  <CoalitionForm />
                </motion.div>
              )}

              {activeTab === 'workforce' && (
                <motion.div
                  key='workforce'
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -30,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                >
                  <Workforce />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </main>
  )
}
