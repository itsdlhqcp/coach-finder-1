// Actions: Mutations are synchronous. If you want to update state asynchronously, use actions. Components should trigger actions which in turn trigger mutations. It's considered a good practice in general to put actions between components and mutations, even though components could could commit mutations themselves and it wouldn't be a problem if you only had synchronous code, to ensure that you never accidentally put asynchronous code into a mutation
export default {
  registerCoach(context, data) {
    const coachData = {
      id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas
    };

    // Commit mutation
    context.commit('registerCoach', coachData);
  }
};
