import Head from "next/head"
import Image from "next/image"

const Objectives = () => {
    return (
      <>
       <Head>
        <title>Objectives - SCBW Foundation</title>
        <meta
          name="description"
          content="SCBW Foundation objectives are solely for blinds and our mission, vision, and the impact we're making for the blinds."
        />
      </Head>
      <div className="bg-gray-50 min-h-screen text-gray-900">
      {/* Header Section */}
      <header className=" hidden md:block bg-primary text-white py-6 rounded-full mx-56">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">
            Special Campaign for Blind Welfare Foundation
          </h1>
          <p className="mt-2">Empowering visually impaired individuals to lead independent lives</p>
        </div>
      </header>

      {/* Objectives Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Our Objectives</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Tailored Education',
                image: '/images/education.webp',
                description: 'Establishing schools and colleges tailored to the needs of the blind.',
              },
              {
                title: 'Healthcare Services',
                image: '/images/healthcare.webp',
                description: 'Providing accessible healthcare services and medical facilities.',
              },
              {
                title: 'Transportation Solutions',
                image: '/images/transport.png',
                description: 'Offering reliable transportation solutions.',
              },
              {
                title: 'Vocational Training',
                image: '/images/vocational.png',
                description: 'Promoting vocational training and employment opportunities.',
              },
              {
                title: 'Community Programs',
                image: '/images/community1.jpg',
                description: 'Creating inclusive community programs.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-700 mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Project Overview</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <Image
                src="/images/project.png"
                alt="Project Overview"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <ul className="list-disc pl-5 space-y-4 text-gray-700">
                <li>Construct specialized educational institutions.</li>
                <li>Equip hospitals with cutting-edge medical equipment.</li>
                <li>Develop transportation infrastructure.</li>
                <li>Implement skill development programs.</li>
                <li>Organize community events and workshops.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
       {/* Budget Breakdown */}
       <section className="py-12 ">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Budget Breakdown</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <Image
                src="/images/budget1.jpg"
                alt="Budget Overview"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
          <ul className="space-y-4 text-lg text-gray-700">
            <li><strong>Infrastructure Development:</strong> $2M</li>
            <li><strong>Medical Equipment:</strong> $15M</li>
            <li><strong>Transportation:</strong> $1M</li>
            <li><strong>Staff Salaries:</strong> $1M</li>
            <li><strong>Program Expenses:</strong> $800,000</li>
          </ul>
          </div>
          </div>
          <p className="mt-4 text-xl font-semibold text-center">
            <strong>Total Budget:</strong> $19,800,000
          </p>
        </div>
      </section>
      </div>
    </>
    )
  }
  
  export default Objectives