const questionAndAnswers = [
  {
    question: 'What Should I Pack for a Safari Trip in South Africa?',
    answer:
      "For a safari trip in South Africa, pack lightweight, breathable clothing in neutral colors (khaki, brown, green), sturdy shoes, a wide-brimmed hat, sunglasses, sunscreen, insect repellent, a camera, binoculars, and a basic first aid kit. Don't forget essential documents like your passport and travel insurance details.",
  },
  {
    question: 'How Can I Make the Most Out of My Visit to Table Mountain?',
    answer:
      'To make the most of your visit to Table Mountain, check the weather forecast and plan your visit on a clear day. Consider hiking one of the trails for a more immersive experience, and book cable car tickets in advance. Visit early morning or late afternoon to avoid crowds, and remember to stay on marked paths, carry water, and wear appropriate clothing and footwear.',
  },
  {
    question: 'What Historical Significance Does Robben Island Hold?',
    answer:
      "Robben Island is renowned for its historical significance as a site of political imprisonment during apartheid. Notably, Nelson Mandela was imprisoned here for 18 years. The island is now a UNESCO World Heritage Site, and visitors can tour the prison, guided by former inmates, to learn about South Africa's struggle for freedom.",
  },
  {
    question: 'What Are Some Must-See Attractions in South Africa?',
    answer:
      'Must-see attractions in South Africa include Kruger National Park for wildlife safaris, Table Mountain for breathtaking views, Robben Island for its historical significance, the Garden Route for scenic drives, and Cape Winelands for wine tasting. Don’t miss out on the vibrant city life in Cape Town and Johannesburg as well.',
  },
  {
    question: 'How Can I Ensure My Safety While Traveling in South Africa?',
    answer:
      'To ensure your safety while traveling in South Africa, stay informed about your destinations, avoid walking alone at night, use reputable transport services, keep valuables secure, and follow local advice and guidelines. It’s also wise to have travel insurance and keep emergency contact numbers handy.',
  },
];

const TipsAndGuides = () => {
  return (
    <section className="mx-2 my-5">
      <h3 className="text-3xl font-bold mb-6 text-center">FAQ</h3>
      {questionAndAnswers.map((item, key) => {
        return (
          <div
            key={item.question}
            className="collapse collapse-arrow bg-base-200 rounded-none mb-2"
          >
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium border border-b-base-300">
              {item.question}
            </div>

            <div className="collapse-content">
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default TipsAndGuides;
