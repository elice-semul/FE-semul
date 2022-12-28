export const ErrorUtil = {
  invalidVariable(target) {
    if (!target || target.length === 0) {
      return {
        status: false,
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
