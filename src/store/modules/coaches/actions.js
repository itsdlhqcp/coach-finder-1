// Actions: Mutations are synchronous. If you want to update state asynchronously, use actions. Components should trigger actions which in turn trigger mutations. It's considered a good practice in general to put actions between components and mutations, even though components could could commit mutations themselves and it wouldn't be a problem if you only had synchronous code, to ensure that you never accidentally put asynchronous code into a mutation
export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas
    };

    const response = await fetch(
      `https://vue3-http-3d6fb-default-rtdb.firebaseio.com/coaches/${userId}.json`,
      {
        // PUT: data will be overwritten if it existed, or created if it didn't exist
        method: 'PUT',
        body: JSON.stringify(coachData)
      }
    );

    // const responseData = await response.json();

    if (!response.ok) {
      // Error...
    }

    // Commit mutation
    context.commit('registerCoach', {
      ...coachData,
      id: userId
    });
  },
  async loadCoaches(context) {
    const response = await fetch(
      `https://vue3-http-3d6fb-default-rtdb.firebaseio.com/coaches.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      // ...
    }

    const coaches = [];

    // Response will be object, each coach under id key
    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas
      };
      coaches.push(coach);
    }

    context.commit('setCoaches', coaches);
  }
};
