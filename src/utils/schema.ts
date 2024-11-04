interface SoftwareApplicationSchema {
  '@context': string;
  '@type': string;
  name: string;
  applicationCategory: string;
  operatingSystem: string;
  offers: {
    '@type': string;
    price: string;
    priceCurrency: string;
  };
  description: string;
  url: string;
  aggregateRating?: {
    '@type': string;
    ratingValue: number;
    ratingCount: number;
    bestRating: number;
    worstRating: number;
  };
}

interface TestSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  provider: {
    '@type': string;
    name: string;
    sameAs: string;
  };
  educationalLevel: string;
  teaches: string;
  learningResourceType: string;
  url: string;
  isAccessibleForFree: boolean;
  offers: {
    '@type': string;
    category: string;
    price: string;
    priceCurrency: string;
    availability: string;
  };
  hasCourseInstance: {
    '@type': string;
    courseMode: string;
    courseWorkload: string;
    timeRequired: string;
  };
  aggregateRating?: {
    '@type': string;
    ratingValue: number;
    ratingCount: number;
    bestRating: number;
    worstRating: number;
  };
}

interface CourseListSchema {
  '@context': string;
  '@type': string;
  itemListElement: Array<{
    '@type': string;
    '@id': string;
    position: number;
    item: {
      '@type': string;
      name: string;
      description: string;
      provider: {
        '@type': string;
        name: string;
        sameAs: string;
      };
      educationalLevel: string;
      teaches: string;
      learningResourceType: string;
      url: string;
      isAccessibleForFree: boolean;
      offers: {
        '@type': string;
        category: string;
        price: string;
        priceCurrency: string;
        availability: string;
      };
      hasCourseInstance: {
        '@type': string;
        courseMode: string;
        courseWorkload: string;
        timeRequired: string;
      };
      aggregateRating?: {
        '@type': string;
        ratingValue: number;
        ratingCount: number;
        bestRating: number;
        worstRating: number;
      };
    };
  }>;
}

const BASE_URL = import.meta.env.PROD ? 'https://cdlpracticetests.com' : 'http://localhost:5173';
const PROVIDER_URL = 'https://www.cdlemploymentsolutions.com';

export function generateSoftwareSchema(averageRating?: number, totalReviews?: number): SoftwareApplicationSchema {
  const schema: SoftwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'CDL Practice Tests',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Any',
    url: BASE_URL,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    description: 'Free CDL practice tests for all US states. Includes tests for Air Brakes, Combination Vehicles, Doubles/Triples, and more.'
  };

  if (averageRating !== undefined && totalReviews !== undefined) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: averageRating,
      ratingCount: totalReviews,
      bestRating: 5,
      worstRating: 1
    };
  }

  return schema;
}

export function generateTestSchema(state: string, category: string, testId: string, averageRating?: number, totalReviews?: number): TestSchema {
  // Convert state and category to kebab-case for URL
  const urlState = state.toLowerCase().replace(/\s+/g, '-');
  const urlCategory = category.toLowerCase().replace(/\s+/g, '-');
  const testUrl = `${BASE_URL}/state/${urlState}/${urlCategory}/${testId}`;
  
  // Format test number for display (e.g., "Test 1")
  const testNumber = testId.replace('test-', '');
  
  const schema: TestSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: `${state} CDL ${category} Practice Test ${testNumber}`,
    description: `Comprehensive CDL ${category} practice test ${testNumber} for ${state} state. Includes multiple choice questions, detailed explanations, and instant scoring.`,
    provider: {
      '@type': 'Organization',
      name: 'CDL Practice Tests',
      sameAs: PROVIDER_URL
    },
    educationalLevel: 'Professional',
    teaches: `Commercial Driver's License ${category} Knowledge`,
    learningResourceType: 'Practice Test',
    url: testUrl,
    isAccessibleForFree: true,
    offers: {
      '@type': 'Offer',
      category: 'CDL Training',
      price: '0',
      priceCurrency: 'USD',
      availability: 'http://schema.org/InStock'
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: 'PT1H',
      timeRequired: 'PT1H'
    }
  };

  if (averageRating !== undefined && totalReviews !== undefined) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: averageRating,
      ratingCount: totalReviews,
      bestRating: 5,
      worstRating: 1
    };
  }

  return schema;
}

export function generateCourseListSchema(state?: string, categoryRatings?: Record<string, { averageRating: number; totalReviews: number }>): CourseListSchema {
  const courses = [
    {
      name: 'Air Brakes CDL Test',
      description: 'Practice tests covering air brake systems, dual air brake systems, and combination vehicle air brakes.',
      teaches: 'Commercial Driver\'s License Air Brakes Knowledge',
      id: 'air-brakes'
    },
    {
      name: 'Combination Vehicles CDL Test',
      description: 'Tests covering coupling and uncoupling, inspecting combinations, and combination vehicle air brakes.',
      teaches: 'Commercial Driver\'s License Combination Vehicles Knowledge',
      id: 'combination-vehicles'
    },
    {
      name: 'Doubles & Triples CDL Test',
      description: 'Practice tests for operating double and triple trailer combinations safely.',
      teaches: 'Commercial Driver\'s License Doubles and Triples Knowledge',
      id: 'doubles-triples'
    },
    {
      name: 'General Knowledge CDL Test',
      description: 'Essential CDL knowledge including vehicle inspection, basic control, and communication.',
      teaches: 'Commercial Driver\'s License General Knowledge',
      id: 'general-knowledge'
    },
    {
      name: 'Hazardous Materials CDL Test',
      description: 'Tests covering the transportation of hazardous materials and required placarding.',
      teaches: 'Commercial Driver\'s License Hazardous Materials Knowledge',
      id: 'hazmat'
    },
    {
      name: 'Passenger Transport CDL Test',
      description: 'Practice tests for safely loading, transporting, and unloading passengers.',
      teaches: 'Commercial Driver\'s License Passenger Transport Knowledge',
      id: 'passenger'
    },
    {
      name: 'School Bus CDL Test',
      description: 'Tests covering school bus operation, student safety, and emergency procedures.',
      teaches: 'Commercial Driver\'s License School Bus Knowledge',
      id: 'school-bus'
    },
    {
      name: 'Tanker Vehicles CDL Test',
      description: 'Practice tests for operating vehicles designed to transport liquids or gases.',
      teaches: 'Commercial Driver\'s License Tanker Vehicles Knowledge',
      id: 'tanker'
    }
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: courses.map((course, index) => {
      // Convert state to kebab-case for URL if provided
      const urlState = state ? state.toLowerCase().replace(/\s+/g, '-') : '';
      const courseUrl = state ? `${BASE_URL}/state/${urlState}/${course.id}/test-1` : `${BASE_URL}/course/${course.id}`;
      const rating = categoryRatings?.[course.id];
      
      const item = {
        '@type': 'ListItem',
        '@id': courseUrl,
        position: index + 1,
        item: {
          '@type': 'Course',
          name: state ? `${state} ${course.name}` : course.name,
          description: course.description,
          provider: {
            '@type': 'Organization',
            name: 'CDL Practice Tests',
            sameAs: PROVIDER_URL
          },
          educationalLevel: 'Professional',
          teaches: course.teaches,
          learningResourceType: 'Practice Test',
          url: courseUrl,
          isAccessibleForFree: true,
          offers: {
            '@type': 'Offer',
            category: 'CDL Training',
            price: '0',
            priceCurrency: 'USD',
            availability: 'http://schema.org/InStock'
          },
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'online',
            courseWorkload: 'PT1H',
            timeRequired: 'PT1H'
          }
        }
      };

      if (rating) {
        item.item.aggregateRating = {
          '@type': 'AggregateRating',
          ratingValue: rating.averageRating,
          ratingCount: rating.totalReviews,
          bestRating: 5,
          worstRating: 1
        };
      }

      return item;
    })
  };
}