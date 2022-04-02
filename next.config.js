const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== "1";
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === "1";
  const firestoreConf = {
    apiKey: "AIzaSyBm9nKAY5uP4iAZb6yPyH5Eazhk7BxaXjw",
    authDomain: "artemdesignstudio-84920.firebaseapp.com",
    projectId: "artemdesignstudio-84920",
    storageBucket: "artemdesignstudio-84920.appspot.com",
    messagingSenderId: "972635788974",
    appId: "1:972635788974:web:930b2eaa0610c451b3ff3f",
  };

  const env = {
    FIRESTROE_CONF: (() => {
      if (isDev || isProd || isStaging) return firestoreConf;
    })(),
    STORAGE_URL:
      "https://storage.googleapis.com/artemdesignstudio-84920.appspot.com/",
    GOOGLE_ANALYTICS: "UA-224475753-1",
  };
  return {
    env,
    images: {
      domains: ["storage.googleapis.com"],
    },
  };
};
