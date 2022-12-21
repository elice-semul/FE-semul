export const ErrorUtil = {
  invalidVariable(target) {
    if (!target) {
      return {
        status: false,
        target,
      };
    }
    return {
      status: true,
    };
  },

  invalidType(target, type) {
    target.forEach((value) => {
      // eslint-disable-next-line valid-typeof
      if (typeof value !== type) {
        return {
          status: false,
          value,
        };
      }
      return {
        status: true,
      };
    });
  },
};
