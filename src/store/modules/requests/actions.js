export default {
  async contactCoach(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message
    };
    const response = await fetch(
      `https://vue3-http-3d6fb-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
      {
        // POST because don't want to overwrite existing data, just want to add a new request
        method: 'POST',
        body: JSON.stringify(newRequest)
      }
    );

    // Firebase automatically returns an id (in name field) after receiving POST request; want to extract it so it can be used in app
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to send request.'
      );
      throw error;
    }

    newRequest.id = responseData.name;
    // Setting it only after request sent so have it in local data, but not data sent to server
    newRequest.coachId = payload.coachId;

    context.commit('addRequest', newRequest);
  }
};
