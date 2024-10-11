import React from 'react';
import "./faq.scss";
const apiDetails = [
  ["Problems signing on or signing in", "If you need help with signing for the API, please check the support forum of our API management provider 3scale here", "If you have questions about the API itself or Edamam’s nutritional service, please contact us at api@edamam.com"],
  ["Where I can see my app_key and app_id?", "You need to log in to the account you created with Edamam at developer.edamam.com. The credentials are located in your Dashboard in the Applications section.", "If you are not seeing any existing application in the Applications section of your Dashboard, you can create a new application. Just click on ‘Create New Application’ button and select the API and plan you need when prompted."],
  ["I am not seeing my application key, why?", "If the ‘View’ button is not present next to your application, then you have selected a paid API plan without entering your credit card details. Edamam requires to have a credit card on file in order for you to see and use your application key for a paid API plan.", "If you want to use our API for free, please use a free application plan."],
  ["How do I update my credit card details?", "You can use this link (when logged in). You will first need to enter your billing address; only then can you enter the credit card details."],
  [
    "How do I upgrade my API plan?",
    "You first need to have a valid entered card saved in your account! See the previous topic. All upgrades are processed in the same account you already have, so there is no need to create a new one.",
    "To Enterprise:",
    "1. Login to developer.edamam.com",
    "2. Go to Dashboard",
    "3. Go to Applications",
    "4. Click on Edit next to the application you want to upgrade",
    "5. Next to the plan on top of the application window you will see a link: Review/Change",
    "6. A pop-up will appear where you can now select an Enterprise plan on the left. Then click on Change at the bottom of the popup.",
    "7. If you have not entered a credit card, the system will ask you to add one first, and you can then upgrade.",
    "To Startup:",
    "1. Find your app_id",
    "2. Send the app_id and a short description of how you are going to use the API to Edamam.",
    "3. Upgrades for the Startup plan are processed manually by Edamam, and you will be upgraded within 24 hours."
  ],
  [
    "How do I downgrade my API plan?",
    "You can do so by logging in to your account, going to Dashboard/Application, and clicking on the 'Change' button next to your current plan.",
    "If the API you are subscribed to offers only paid plans, you can still downgrade. You need to select in the Dashboard the available 'Minimum Service' plan, which is free and can be used for simple tests."
  ],
  [
    "I have a plan with Free Trial, why did I get charged?",
    "When an API plan includes a free trial, you are entitled to only one use of it. The free trial will be invalidated if you subscribe to another free trial for the same API or if you downgrade from another plan for the same API to a plan with a free trial option.",
    "At the end of the free trial, unless you downgrade the application, you will be charged the regular monthly fee for the plan for the next month."
  ],
  [
    "How do I subscribe to more than one API?",
    "First, sign up for one of the APIs in order to create an account with Edamam. Once you have an account, you can add more APIs to it. Each API has its own application and set of credentials.",
    "1. Login to developer.edamam.com",
    "2. Go to Dashboard",
    "3. Go to Applications",
    "4. Click on 'Create New Application'",
    "5. Select the API you want to create an application for",
    "6. Fill the required fields in the application creation form."
  ],
  [
    "How to subscribe to the Meal Planner API?",
    "If you do not have an Edamam account, you can sign up directly from the Meal Planner page, and a plan will be assigned to the account.",
    "If you do have an account with Edamam, follow these steps:",
    "1. Login to developer.edamam.com",
    "2. Go to Dashboard",
    "3. Go to Applications",
    "4. Click 'Create New Application' Button",
    "5. Select 'Recipe Search API'",
    "6. Select a Meal Planner Developer plan from the list."
  ],
  [
    "I am getting a 401 error, why?",
    "Please make sure you are using the credentials you created for this exact API as they are API and plan specific.",
    "If you are using the right credentials and still get a 401 error, you might be hitting your limit. Check your account to see if this is the case."
  ],
  [
    "Error message: 'Unauthorized app_id = ${YOUR_APP_KEY}. This app_id is for another API.'",
    "This is one of the possible reasons for a 401 error. Edamam has several APIs, and you cannot use the credentials from one API for another. You can use only the app_key/app_id pair for the specific API your application was created for. Please register an application for the API you are trying to use."
  ],
  [
    "I am getting a 403 error, why?",
    "Please make sure you remove any symbols like '$' or '{}' from the credentials you submit.",
    "If this does not help, check if you are using the correct syntax for the body of the request."
  ],
  [
    "I am getting a 555 error (low quality), why?",
    "The 555 error ensures that we always provide accurate information. This error means that the recipe does not pass our nutrition quality check. Possible reasons include: too high or too low weight of a serving, unrecognized ingredients, or ingredients to which no weight can be assigned.",
    "Alternatively, you can send a few of these recipes to api@edamam.com for review."
  ],
  [
    "I am not seeing cooking instructions in the Recipe Search API",
    "The recipes in the Recipe Search API are web recipes collected from across the internet. Edamam does not hold the copyrights to these recipes. Therefore, we do not provide the cooking instructions, but we do provide the URL to the source recipe. The nutrition information is generated by Edamam.",
    "We offer fully licensed recipes with cooking instructions, which can be discussed by contacting us using the 'Support' widget."
  ],
  [
    "How should I format the recipe?",
    "Recipes are submitted in JSON format according to the specific API documentation."
  ],
  [
    "Do you support direct requests from the browser (AJAX, JSONP, CORS)?",
    "Yes, Edamam supports all of these. For more details, please refer to developer forums like StackOverflow and other software development resources on the internet."
  ],
  [
    "How do I get the best results in my nutrition analysis?",
    "Always include an ingredient quantity: '3 oz butter cookies' is preferable to 'butter cookies or tuiles.'",
    "Shorten and simplify the line: '2 cans garbanzo beans, drained' is preferable to '2-2 1/2 cans of washed and drained garbanzo beans.'",
    "If oil is used for frying, indicate so in the ingredient line (add the words 'for frying') so we can accurately calculate how much gets absorbed.",
    "For stocks and broths, include 'stock' or 'broth' in the recipe title, so we can accurately calculate the remaining nutritional value once it’s strained."
  ],
  [
    "Why am I getting only four nutrients in my Food Database API responses?",
    "The Parse access point allows you to search for foods and get a list of matching foods to your search criteria – keywords, nutrition, etc. In this response, we also return some basic nutrients per 100 grams for your convenience.",
    "The Nutrients access point allows you to submit a food you found in the Parse requests and get detailed nutrition with 28 nutrients for a given serving size."
  ],
  [
    "What diet, health, and allergens filters/tags does Edamam provide?",
    "The list of the tags generated by the Nutrition API and their definitions can be found in the API Documentation.",
    "The list of the filters provided for the Recipe Search & Nutrition API can be found in the API Documentation."
  ],
  [
    "Can I submit recipe search requests without a food term (q=)?",
    "You can submit a request without specifying a term after 'q='. However, in such cases, you always need to specify at least one diet/health label or one nutrient range.",
    `A sample request will look like this: 'https://api.edamam.com/search?
    q=&app_id=YOURAPP_ID&app_key=YOURAPP_KEY&diet=low-carb' or 'https://api.edamam.com/search?q=&app_id=YOURAPP_ID&app_key=YOURAPP_KEY&nutrients[CA]=50%2B.'`
  ],
  [
    "What does attribution mean?",
    "You can find details about the Edamam attribution requirements in the respective API Plan description. We require the words 'powered by' followed by our logo with the image linking to http://developer.edamam.com."
  ],
  [
    "If I cancel my API subscription, what happens to my nutritional information?",
    "If you decide to cancel your subscription, you must return all nutritional information provided by Edamam, and you can no longer use it in any form."
  ],
  [
    "Upgrading/Downgrading",
    "You can upgrade/downgrade at any time for any of our APIs. Upgrading is effective immediately, and you will be billed pro rata for the current month. Downgrading is effective from the start of your next billing cycle."
  ],
  [
    "How can I check if I have hit my monthly/daily API quota?",
    "You can visit your account and check your usage stats."
  ],
  [
    "How can I see my applications and manage my data plans?",
    "Login to your account and visit the Applications section."
  ],
  [
    "Can I cache information from the API on my servers?",
    "Each API details the data allowed to be cached in the specific API plan page."
  ],
  [
    "Contacting Edamam",
    "Please use the Support button on any page of the API to contact us."
  ]
];

const FAQ = () => {
  return (
        <div className='faq-wrapper'>
      {apiDetails.map((detail, index) => (
        <div key={index} className='fqi-details'>
          <h4>{detail[0]}</h4>
          {detail.slice(1).map((content, idx) => (
            <p key={idx}>{content}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
