'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import InnerFooter from '../../components/InnerFooter';

// This data will be moved to a central location in a real app
const blogPosts = [
  {
    id: 1,
    title: "Best Practices for Sustainable Farming in The Gambia",
    excerpt: "Learn how to implement sustainable farming techniques that work well in The Gambian climate and soil conditions.",
    image: "/images/sustainable-farming.jpg",
    category: "sustainability",
    date: "April 10, 2025",
    author: "Muhammed Marong",
    content: `
      <p>Sustainable farming is crucial for the long-term viability of agriculture in The Gambia. As climate change continues to impact our region, adopting sustainable practices is not just environmentally responsible—it's becoming economically necessary.</p>
      
      <h2>Key Sustainable Practices for Gambian Farmers</h2>
      
      <p>There are several approaches that have proven successful in our unique climate:</p>
      
      <ul>
        <li><strong>Crop Rotation:</strong> Alternating crops in a specific field helps prevent soil depletion and breaks pest cycles. Consider rotating cereals with legumes to naturally fix nitrogen in the soil.</li>
        <li><strong>Water Conservation:</strong> Implement drip irrigation and rainwater harvesting to make the most of our limited water resources, especially in the dry season.</li>
        <li><strong>Integrated Pest Management:</strong> Use natural predators and resistant plant varieties before resorting to chemical controls.</li>
        <li><strong>Agroforestry:</strong> Combining trees with crop production can provide shade, prevent erosion, and create additional income streams.</li>
      </ul>
      
      <h2>Success Story: The Kerewan Model Farm</h2>
      
      <p>In North Bank Region, the Kerewan community farm has implemented these practices with remarkable results. Their crop yields have increased by 35% over three years, while reducing water usage by 20% and practically eliminating chemical pesticides.</p>
      
      <p>The farm manager, Fatou Jallow, notes: "We've seen dramatic improvements not just in our harvests, but in soil health and biodiversity too. Birds and beneficial insects have returned to our fields, which helps control pests naturally."</p>
      
      <h2>Getting Started with Sustainable Farming</h2>
      
      <p>Begin small with these steps:</p>
      
      <ol>
        <li>Start composting crop residues and animal manure to improve soil fertility</li>
        <li>Plant nitrogen-fixing cover crops between main growing seasons</li>
        <li>Create windbreaks using native trees to prevent soil erosion</li>
        <li>Join a farmer field school to learn practical techniques from experts</li>
      </ol>
      
      <p>The transition to sustainable practices takes time, but the benefits for your farm's productivity, resilience, and profitability are significant and lasting.</p>
    `
  },
  {
    id: 2,
    title: "How to Get the Best Market Prices for Your Crops",
    excerpt: "Tips and strategies to ensure you maximize profits when selling your agricultural produce.",
    image: "/images/market-prices.jpg",
    category: "market",
    date: "April 5, 2025",
    author: "Muhammed Marong",
    content: `
      <p>Getting fair prices for your agricultural products can be challenging, especially for small-scale farmers. However, with the right strategies, you can significantly increase your profits and ensure your farming business remains sustainable.</p>
      
      <h2>Understanding Market Dynamics</h2>
      
      <p>Before bringing your produce to market, take time to understand:</p>
      
      <ul>
        <li><strong>Seasonal Price Fluctuations:</strong> Prices for most crops follow predictable patterns throughout the year. Understanding these cycles helps you decide when to sell.</li>
        <li><strong>Supply and Demand:</strong> Keep track of which crops are in high demand but short supply, as these will command better prices.</li>
        <li><strong>Quality Standards:</strong> Buyers often pay premium prices for produce that meets specific quality criteria.</li>
      </ul>
      
      <h2>Practical Strategies to Increase Your Profits</h2>
      
      <h3>1. Timing Your Harvest and Sales</h3>
      
      <p>Consider these tactics:</p>
      <ul>
        <li>Plant early or late to hit market windows when prices are higher</li>
        <li>Use simple storage techniques to sell when supply is lower and prices rise</li>
        <li>Monitor price trends across different markets using Baykart's Market View feature</li>
      </ul>
      
      <h3>2. Direct Marketing and Value Addition</h3>
      
      <p>Bypassing middlemen can significantly increase your profits:</p>
      <ul>
        <li>Sell directly to consumers through local markets</li>
        <li>Form or join a cooperative to access larger buyers and better negotiate prices</li>
        <li>Add value to raw products (e.g., processing groundnuts into oil, drying fruits, etc.)</li>
      </ul>
      
      <h3>3. Building Relationships with Buyers</h3>
      
      <p>Long-term relationships can lead to more stable prices:</p>
      <ul>
        <li>Establish contracts with hotels, restaurants, or processors</li>
        <li>Maintain consistent quality and reliable supply to build trust</li>
        <li>Use digital platforms like Baykart to connect with new buyers</li>
      </ul>
      
      <h2>Success Story: Tujereng Women's Vegetable Cooperative</h2>
      
      <p>The women farmers in Tujereng increased their earnings by 45% after implementing these strategies. By coordinating planting schedules, collectively storing produce, and negotiating as a group, they're now able to command better prices and have more stable incomes throughout the year.</p>
    `
  },
  {
    id: 3,
    title: "Understanding Seasonal Weather Patterns for Better Planting",
    excerpt: "A guide to The Gambia's weather patterns and how to time your planting for optimal yields.",
    image: "/images/weather-patterns.jpg",
    category: "education",
    date: "March 28, 2025",
    author: "Muhammed Marong",
    content: `
      <p>The Gambia's climate is characterized by distinct wet and dry seasons that significantly impact agricultural activities. Understanding these patterns is essential for successful farming.</p>
      
      <h2>The Gambian Climate Cycle</h2>
      
      <p>Our country experiences two main seasons:</p>
      
      <ul>
        <li><strong>Wet Season (June-October):</strong> Receives approximately 800-1000mm of rainfall, with most coming in July and August.</li>
        <li><strong>Dry Season (November-May):</strong> Almost no rainfall, with temperatures ranging from 18-40°C depending on the month.</li>
      </ul>
      
      <p>Within these seasons, we can identify more specific periods that affect planting decisions:</p>
      
      <h2>Key Weather Patterns Affecting Agriculture</h2>
      
      <h3>Early Rains (June)</h3>
      <p>These first rains can be inconsistent and are sometimes followed by dry spells. Early planting is risky but can lead to earlier harvests and higher prices.</p>
      
      <h3>Peak Rains (July-August)</h3>
      <p>Reliable, heavy rainfall that provides ideal conditions for most staple crops. However, waterlogging can be an issue in low-lying areas.</p>
      
      <h3>Late Rains (September-October)</h3>
      <p>Gradually diminishing rainfall as the season ends. Important for crops to have adequate soil moisture during the grain-filling or fruiting stage.</p>
      
      <h3>Cool Dry Season (November-February)</h3>
      <p>Relatively cool temperatures with low humidity. Excellent for horticultural crops with irrigation.</p>
      
      <h3>Hot Dry Season (March-May)</h3>
      <p>Challenging growing conditions with high temperatures and very low humidity. Requires efficient irrigation and heat-tolerant varieties.</p>
      
      <h2>Optimal Planting Calendar for Common Crops</h2>
      
      <table>
        <tr>
          <th>Crop</th>
          <th>Best Planting Time</th>
          <th>Considerations</th>
        </tr>
        <tr>
          <td>Groundnuts</td>
          <td>Mid-June to early July</td>
          <td>Plant after consistent rainfall has established</td>
        </tr>
        <tr>
          <td>Millet</td>
          <td>Late June</td>
          <td>Can withstand early dry spells</td>
        </tr>
        <tr>
          <td>Rice (upland)</td>
          <td>Early July</td>
          <td>Requires consistent moisture throughout season</td>
        </tr>
        <tr>
          <td>Maize</td>
          <td>Early to mid-July</td>
          <td>Sensitive to drought during flowering</td>
        </tr>
        <tr>
          <td>Vegetables (dry season)</td>
          <td>October-November</td>
          <td>Requires irrigation but less pest pressure</td>
        </tr>
      </table>
      
      <h2>Using Climate Information for Decision Making</h2>
      
      <p>Weather patterns are becoming less predictable due to climate change. To adapt:</p>
      
      <ul>
        <li>Use the Baykart app to access seasonal forecasts and weather alerts</li>
        <li>Diversify with crops that mature at different times</li>
        <li>Consider drought-tolerant varieties for early planting</li>
        <li>Implement water conservation techniques like tied ridges and mulching</li>
        <li>Monitor rainfall with simple gauges to build your own historical data</li>
      </ul>
      
      <p>Understanding and adapting to our local weather patterns will help you make better farming decisions and increase your resilience to climate variability.</p>
    `
  },
  {
    id: 4,
    title: "New Agricultural Technologies for Small-Scale Farmers",
    excerpt: "Affordable technologies that can help small-scale farmers increase efficiency and productivity.",
    image: "/images/agri-tech.jpg",
    category: "technology",
    date: "March 20, 2025",
    author: "Muhammed Marong",
    content: `
      <p>Technology is transforming agriculture worldwide, and The Gambia's small-scale farmers can benefit tremendously from appropriate, affordable innovations. These technologies don't have to be complex or expensive to make a big difference.</p>
      
      <h2>Accessible Technologies for Immediate Impact</h2>
      
      <h3>1. Mobile Phone Applications</h3>
      <p>Beyond the Baykart app itself, there are several free or low-cost mobile tools that can help farmers:</p>
      <ul>
        <li><strong>Weather forecast apps</strong> that provide localized predictions</li>
        <li><strong>Pest identification tools</strong> using phone cameras</li>
        <li><strong>Voice-based advisory services</strong> in local languages</li>
        <li><strong>Simple farm record-keeping apps</strong> to track expenses and income</li>
      </ul>
      
      <h3>2. Improved Irrigation Solutions</h3>
      <p>Water management innovations that conserve resources while improving yields:</p>
      <ul>
        <li><strong>Solar-powered drip irrigation kits</strong> starting from D15,000</li>
        <li><strong>Clay pot irrigation</strong> using locally made materials</li>
        <li><strong>Rope and washer pumps</strong> that are easily maintained</li>
        <li><strong>Rainwater harvesting systems</strong> using simple gutters and storage</li>
      </ul>
      
      <h3>3. Post-Harvest Technologies</h3>
      <p>Reducing losses after harvest can be as important as increasing yields:</p>
      <ul>
        <li><strong>Hermetic storage bags</strong> that prevent pest damage without chemicals</li>
        <li><strong>Solar dryers</strong> for fruits and vegetables that preserve nutrients</li>
        <li><strong>Zero-energy cool chambers</strong> made from local materials</li>
        <li><strong>Simple moisture meters</strong> to ensure crops are properly dried</li>
      </ul>
      
      <h2>Community-Based Technology Approaches</h2>
      
      <p>Many technologies become more accessible when farmers pool resources:</p>
      
      <ul>
        <li><strong>Shared equipment schemes</strong> where groups invest in machinery together</li>
        <li><strong>Community processing centers</strong> with improved equipment</li>
        <li><strong>Farmer-to-farmer technology training</strong> where early adopters teach others</li>
        <li><strong>Innovation hubs</strong> where farmers can test new tools before purchasing</li>
      </ul>
      
      <h2>Success Story: The Kiang West Innovation Group</h2>
      
      <p>A group of 15 farmers in Kiang West pooled resources to purchase a shared solar dryer and packaging equipment. They now process and preserve vegetables and fruits during peak season, selling them during off-seasons at premium prices. Their investment was recovered within one year, and members' incomes have increased by an average of 30%.</p>
      
      <h2>Getting Started with Agricultural Technology</h2>
      
      <ol>
        <li>Start with simple, low-cost solutions that address your biggest challenges</li>
        <li>Form or join a group to share costs and knowledge</li>
        <li>Visit demonstration farms where new technologies are being used</li>
        <li>Take advantage of NGO and government programs that subsidize technology adoption</li>
        <li>Document results to evaluate what works best for your specific situation</li>
      </ol>
      
      <p>Remember, appropriate technology is about finding the right tool for your specific needs and conditions—not necessarily the newest or most advanced option.</p>
    `
  },
  {
    id: 5,
    title: "Building Resilience Against Climate Change",
    excerpt: "Practical strategies to make your farm more resilient to the effects of climate change in The Gambia.",
    image: "/images/climate-resilience.jpg",
    category: "sustainability",
    date: "March 15, 2025",
    author: "Muhammed Marong",
    content: `
      <p>Climate change is no longer a distant threat but a present reality for farmers in The Gambia. We're experiencing more erratic rainfall, higher temperatures, saltwater intrusion in coastal areas, and increasingly unpredictable growing seasons.</p>
      
      <p>However, there are practical steps every farmer can take to build resilience and continue to thrive despite these challenges.</p>
      
      <h2>Understanding Climate Risks in The Gambia</h2>
      
      <p>Different regions face different climate challenges:</p>
      
      <ul>
        <li><strong>Coastal Areas:</strong> Saltwater intrusion, coastal erosion</li>
        <li><strong>Central River Region:</strong> Flooding, followed by drought</li>
        <li><strong>Upper River Region:</strong> Higher temperatures, more intense dry seasons</li>
        <li><strong>North Bank Region:</strong> Erratic rainfall patterns, strong winds</li>
      </ul>
      
      <p>The first step in building resilience is understanding the specific risks your farm faces.</p>
      
      <h2>Field-Level Resilience Strategies</h2>
      
      <h3>1. Soil Health Management</h3>
      <p>Healthy soils are more resilient to both floods and droughts:</p>
      <ul>
        <li>Increase organic matter through compost and manure application</li>
        <li>Minimize tillage to maintain soil structure</li>
        <li>Use cover crops to protect bare soil during the dry season</li>
        <li>Create contour berms to prevent erosion during heavy rains</li>
      </ul>
      
      <h3>2. Water Management</h3>
      <p>Preparing for both too much and too little water:</p>
      <ul>
        <li>Construct water harvesting structures (swales, ponds, dams)</li>
        <li>Build raised beds in flood-prone areas</li>
        <li>Install efficient irrigation systems for dry periods</li>
        <li>Create drainage channels to manage excess water</li>
      </ul>
      
      <h3>3. Crop Diversification and Selection</h3>
      <p>Don't put all your eggs in one basket:</p>
      <ul>
        <li>Plant drought-tolerant varieties like improved early-maturing millet</li>
        <li>Inter-crop compatible species (e.g., cereals with legumes)</li>
        <li>Maintain traditional varieties that have natural resilience</li>
        <li>Practice agroforestry to create microclimate buffers</li>
      </ul>
      
      <h2>Farm Business Resilience</h2>
      
      <p>Beyond field practices, consider how to make your farm business more resilient:</p>
      
      <ul>
        <li><strong>Diversified Income Sources:</strong> Combine crop production with livestock, processing, or off-farm activities</li>
        <li><strong>Risk Management Tools:</strong> Explore insurance products designed for smallholders</li>
        <li><strong>Flexible Marketing:</strong> Develop multiple market channels to sell your produce</li>
        <li><strong>Knowledge Networks:</strong> Join farmer groups to share information and resources</li>
      </ul>
      
      <h2>Success Story: Resilience in Action</h2>
      
      <p>Lamin Sanyang from Janjangbureh transformed his vulnerable single-crop farm into a resilient integrated system. He now combines:</p>
      <ul>
        <li>Drought-resistant sorghum and millet varieties</li>
        <li>Small-scale vegetable production using efficient irrigation</li>
        <li>Fruit trees as windbreaks and additional income sources</li>
        <li>Small ruminants that can be sold during crop failures</li>
      </ul>
      
      <p>"During the 2024 drought, many farms in my area lost everything," says Lamin. "My yields were lower, but the diversity meant I still had income from vegetables and livestock, and my soil retained enough moisture for the trees to survive."</p>
      
      <h2>Getting Started with Climate Resilience</h2>
      
      <p>Begin with these steps:</p>
      <ol>
        <li>Map the specific climate risks on your farm</li>
        <li>Implement at least one water management practice this season</li>
        <li>Add one new crop variety or species to diversify risk</li>
        <li>Connect with other farmers to share experiences and solutions</li>
        <li>Document what works and what doesn't to build your knowledge</li>
      </ol>
      
      <p>Remember, building resilience is a journey, not a destination. Each season brings learning opportunities to improve your farm's ability to thrive despite changing conditions.</p>
    `
  },
  {
    id: 6,
    title: "Community Farming Initiatives: Success Stories",
    excerpt: "How communities across The Gambia are coming together to create successful farming cooperatives.",
    image: "/images/community-farming.jpg",
    category: "community",
    date: "March 8, 2025", 
    author: "Muhammed Marong",
    content: `
      <p>Across The Gambia, farmers are discovering that collaboration can lead to greater success than working individually. Community farming initiatives and cooperatives are transforming agriculture in many regions, allowing smallholders to overcome common challenges through collective action.</p>
      
      <h2>The Power of Farming Together</h2>
      
      <p>Community approaches to farming offer numerous advantages:</p>
      
      <ul>
        <li><strong>Economies of scale</strong> when purchasing inputs or equipment</li>
        <li><strong>Stronger bargaining power</strong> when selling to large buyers</li>
        <li><strong>Knowledge sharing</strong> between experienced and newer farmers</li>
        <li><strong>Risk distribution</strong> across multiple members</li>
        <li><strong>Access to financing</strong> that might not be available to individuals</li>
        <li><strong>Social support</strong> during challenging times</li>
      </ul>
      
      <h2>Success Stories from Across The Gambia</h2>
      
      <h3>Janjanbureh Women's Vegetable Cooperative</h3>
      
      <p>In Central River Region, 45 women formed a cooperative that has transformed their community's food security and income. Together, they:</p>
      
      <ul>
        <li>Secured a 5-hectare plot with reliable water access</li>
        <li>Installed a solar-powered irrigation system</li>
        <li>Established a rotating leadership structure and clear bylaws</li>
        <li>Created a savings scheme that members can borrow from</li>
        <li>Negotiated contracts with hotels in the tourism sector</li>
      </ul>
      
      <p>Result: Average member income has increased threefold, and the community now has year-round access to fresh vegetables.</p>
      
      <h3>Soma Young Farmers' Collective</h3>
      
      <p>In Lower River Region, a group of 30 young farmers has pioneered a modern approach to community farming:</p>
      
      <ul>
        <li>Combined traditional knowledge with modern agroecological practices</li>
        <li>Created a shared equipment pool including a tractor and processing machines</li>
        <li>Developed a digital marketing strategy for direct consumer sales</li>
        <li>Established a training program for continuous skills development</li>
      </ul>
      
      <p>Result: They've created viable agricultural livelihoods that have prevented youth migration to urban areas.</p>
      
      <h3>Kerr Batch Multi-Village Cereal Bank</h3>
      
      <p>In North Bank Region, five villages collaborated to address grain storage and market timing:</p>
      
      <ul>
        <li>Built a central storage facility with proper pest management</li>
        <li>Established quality standards for grain acceptance</li>
        <li>Created a management committee with representatives from each village</li>
        <li>Developed a rotating fund to pay farmers at harvest with fair prices</li>
        <li>Sold grain strategically when market prices were higher</li>
      </ul>
      
      <p>Result: Farmers receive 25% more for their grain, and food security has improved throughout the lean season.</p>
      
      <h2>Starting Your Own Community Initiative</h2>
      
      <p>Inspired to start a community farming project? Follow these steps:</p>
      
      <ol>
        <li><strong>Begin with a clear shared purpose</strong> that addresses a common challenge</li>
        <li><strong>Start small with a core group</strong> of committed members before expanding</li>
        <li><strong>Establish clear governance structures</strong> and transparent financial management</li>
        <li><strong>Document agreements in writing</strong>, even if informal</li>
        <li><strong>Focus on early wins</strong> to build momentum and trust</li>
        <li><strong>Connect with support organizations</strong> that can provide training and resources</li>
      </ol>
      
      <h2>Common Challenges and Solutions</h2>
      
      <table>
        <tr>
          <th>Challenge</th>
          <th>Solution</th>
        </tr>
        <tr>
          <td>Unequal participation</td>
          <td>Clear expectations for work contributions and benefits</td>
        </tr>
        <tr>
          <td>Conflict management</td>
          <td>Agreed-upon process for resolving disagreements</td>
        </tr>
        <tr>
          <td>Financial transparency</td>
          <td>Regular reporting and multiple signatories for accounts</td>
        </tr>
        <tr>
          <td>Decision-making bottlenecks</td>
          <td>Define which decisions need full consensus vs. committee approval</td>
        </tr>
      </table>
      
      <p>Remember that successful community initiatives balance structure with flexibility. The relationships between members are just as important as the technical aspects of farming.</p>
    `
  }
];

export default function BlogPost() {
  const params = useParams();
  const [blogPost, setBlogPost] = useState<typeof blogPosts[0] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application, this would be an API call
    // For now, we'll simulate fetching from our static data
    if (params.id) {
      const post = blogPosts.find(post => post.id.toString() === params.id);
      if (post) {
        setBlogPost(post);
      }
      setLoading(false);
    }
  }, [params.id]);

  if (loading) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-24 flex justify-center items-center min-h-[60vh]">
          <div className="animate-pulse">Loading...</div>
        </div>
      </main>
    );
  }

  if (!blogPost) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-24 container mx-auto px-6 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Blog Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
            <Link href="/blog" className="inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors">
              Return to Blog
            </Link>
          </div>
        </div>
        <InnerFooter />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-24">
        {/* Blog Header */}
        <div className="bg-green-600 text-white py-16">
          <div className="container mx-auto px-6">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-white mb-6 hover:underline"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to All Posts
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{blogPost.title}</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm bg-white/20 px-3 py-1 rounded-full">{blogPost.category}</span>
              <span className="text-sm">{blogPost.date}</span>
              <span className="text-sm">By {blogPost.author}</span>
            </div>
          </div>
        </div>
        
        {/* Blog Content */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              {/* Featured Image */}
              <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-green-600 flex items-center justify-center text-white text-2xl">
                  {/* This will show if image fails to load */}
                  <span>Baykart Blog</span>
                </div>
                {/* Uncomment when you have actual images */}
                {/* <Image
                  src={blogPost.image}
                  alt={blogPost.title}
                  fill
                  className="object-cover"
                /> */}
              </div>
              
              {/* Content */}
              <div 
                className="prose prose-lg max-w-none prose-headings:text-green-700 prose-a:text-orange-500"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />
              
              {/* Author Box */}
              <div className="mt-12 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">About the Author</h3>
                <p className="text-gray-600">
                  Muhammed Marong is an agricultural expert with extensive experience in farming practices across The Gambia. 
                  He specializes in sustainable agriculture and helping farmers improve their productivity and profitability.
                </p>
              </div>
              
              {/* Related Posts */}
              <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-6">You Might Also Like</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {blogPosts
                    .filter(post => post.id !== blogPost.id)
                    .slice(0, 2)
                    .map(post => (
                      <Link 
                        key={post.id} 
                        href={`/blog/${post.id}`}
                        className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                      >
                        <div className="p-6">
                          <h4 className="text-lg font-semibold mb-2 text-gray-800">{post.title}</h4>
                          <p className="text-gray-600 text-sm mb-2">{post.date} | By Muhammed Marong</p>
                          <span className="text-green-600 text-sm">Read more →</span>
                        </div>
                      </Link>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <InnerFooter />
      </div>
    </main>
  );
} 