import React, { useState } from 'react'
import { Disclosure, Menu } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'AboutMe',
    subItems: [
      { name: 'My CV', href: '/mycv' }
    ]
  },
  {
    name: 'Project',
    subItems: [
      { name: 'Project Builded', href: 'Project' },
      { name: 'Web Development', href: '#' },
      { name: 'Mobile App', href: '#' },
      { name: 'AI Tools', href: '#' },
    ],
  },
  {
    name: 'Contact',
    href: 'Contact',
  },
  {
    name: 'Experience',
    subItems: [
      { name: 'Certificate', href: 'Certificate' },
      { name: 'Work Experience', href: 'Experience' }
    ],
    href: 'Experience',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <Disclosure as="nav" className="bg-white shadow-md">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              
              {/* Logo & Title */}
              <div className="flex-shrink-0 flex justify-center items-center">
                <img src='/src/img/thy1.jpg' className='w-14 h-14 rounded-full mr-2' alt="Logo" />
                <h1 className="text-3xl font-bold text-indigo-600">Developer</h1>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-6">
                {navigation.map((item) =>
                  item.subItems ? (
                    <Menu as="div" className="relative" key={item.name}>
                      <Menu.Button className="text-gray-700 hover:text-indigo-600 font-medium text-xl">
                        {item.name}
                      </Menu.Button>
                      <Menu.Items className="absolute z-10 mt-6 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          {item.subItems.map((sub) => (
                            <Menu.Item key={sub.name}>
                              {({ active }) => (
                                <a
                                  href={sub.href}
                                  className={classNames(
                                    active ? 'bg-gray-100 text-indigo-600' : 'text-gray-700',
                                    'block px-4 py-2 text-lg'
                                  )}
                                >
                                  {sub.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
                      </Menu.Items>
                    </Menu>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-700 hover:text-indigo-600 font-medium text-xl"
                    >
                      {item.name}
                    </a>
                  )
                )}
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <Disclosure.Button
                  className="text-gray-700 hover:text-indigo-600 focus:outline-none"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {open ? (
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Panel */}
          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) =>
                item.subItems ? (
                  <div key={item.name} className="space-y-1">
                    <span className="block text-gray-700 font-semibold">{item.name}</span>
                    <div className="pl-4">
                      {item.subItems.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          className="block text-gray-600 hover:text-indigo-600 py-1"
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-gray-700 hover:text-indigo-600 py-1"
                  >
                    {item.name}
                  </a>
                )
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
