export function InfoGrid() {
  const steps = [
    {
      number: '1',
      title: 'Create a free account',
      description: 'We don\'t collect any fee for listing livestock.'
    },
    {
      number: '2',
      title: 'Get approved to sell',
      description: 'We strive for providing the highest security.'
    },
    {
      number: '3',
      title: 'Add cattle listing',
      description: 'We help you create a listing including breed, age, weight.'
    },
    {
      number: '4',
      title: 'Appear in our catalog',
      description: 'Thousands of nationwide buyers searching for livestock everyday!'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-2">
          Start selling around the country
        </h2>
        <p className="text-center text-green-600 mb-12">HOW TO START</p>
        
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white text-xl font-bold mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}