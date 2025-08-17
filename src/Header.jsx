import { useState } from 'react';
import { Disclosure, Menu } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom'; 

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'AboutMe',
    subItems: [
      { name: 'Talking about me', href: '/about' },  
      { name: 'Support Me ', href: '/Support' },
      { name: 'My CV', href: '/mycv' }
    ]
  },
  {
    name: 'Project',
    subItems: [
      { name: 'Project Builded', href: '/project' },
      { name: 'Web Development', href: '#' },
      { name: 'Mobile App', href: '#' },
      { name: 'AI Tools', href: '#' },
    ],
  },
  {
    name: 'Contact',
    href: '/contact',
  },
  {
    name: 'Experience',
    subItems: [
      { name: 'Certificate', href: '/certificate' },
      { name: 'Work Experience', href: '/experience' }
    ],
    href: '/experience',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Disclosure as="nav" className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">

              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <img src="/assets/thy1.jpg" className="w-14 h-14 rounded-full mr-2" alt="Logo" />
                <h1 className="t-dev text-3xl font-bold text-indigo-600">THY-Developer</h1>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-6">
                {navigation.map((item) =>
                  item.subItems ? (
                    <Menu as="div" className="relative" key={item.name}>
                      <Menu.Button className="relative text-gray-700 hover:text-indigo-600 font-medium text-xl after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-indigo-600 hover:after:w-full after:transition-all after:duration-300">
                        {item.name}
                      </Menu.Button>
                      <Menu.Items className="absolute z-10 mt-6 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-gray-100 ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          {item.subItems.map((sub) => (
                            <Menu.Item key={sub.name}>
                              {({ active }) => (
                                <Link
                                  to={sub.href}
                                  className={classNames(
                                    active ? 'bg-gray-100 text-indigo-600' : 'text-gray-700',
                                    'relative block px-4 py-2 text-lg after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-indigo-600 hover:after:w-full after:transition-all after:duration-300'
                                  )}
                                >
                                  {sub.name}
                                </Link>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
                      </Menu.Items>
                    </Menu>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="relative text-gray-700 hover:text-indigo-600 font-medium text-xl after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-indigo-600 hover:after:w-full after:transition-all after:duration-300"
                    >
                      {item.name}
                    </Link>
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
                    <span className="relative block text-gray-700 font-semibold after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-indigo-600 hover:after:w-full after:transition-all after:duration-300">
                      {item.name}
                    </span>
                    <div className="pl-4">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          className="relative block text-gray-600 hover:text-indigo-600 py-1 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-indigo-600 hover:after:w-full after:transition-all after:duration-300"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="relative block text-gray-700 hover:text-indigo-600 py-1 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-indigo-600 hover:after:w-full after:transition-all after:duration-300"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
