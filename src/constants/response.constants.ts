// Response status codes
export const ResponseCode = {
    SUCCESS: 200,
    ERROR: 500,
    NOT_FOUND: 404,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
  };
  
  // Response messages
  export const ResponseMessage = {
    SUCCESS: 'Operation completed successfully.',
    ERROR: 'An error occurred while processing the request.',
    NOT_FOUND: 'The requested resource could not be found.',
    BAD_REQUEST: 'The request could not be understood by the server.',
    UNAUTHORIZED: 'You are not authorized to access this resource.',
    FORBIDDEN: 'You do not have permission to access this resource.',
    CREATEDSUCCESSFULLY: 'Location created successfully.',
    UPDATEDSUCCESSFULLY: 'Location updated successfully.',
    DELETEDSUCCESSFULLY: 'Location deleted successfully.',
    LOGINSUCCESSFULLY: 'Login successfully.',
    INVALIDLOGIN: 'Invalid username or password.', 
  };
  