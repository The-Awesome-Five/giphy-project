const request = async (method, url, data = null, headers = {}, contentType = 'application/json') => {
  try {
    const options = {
      method,
      headers: {
        ...headers,
      },
    };

    if (data && !(data instanceof FormData)) {
      if (contentType) {
        options.headers['content-type'] = contentType;
      }
      options.body = contentType === 'application/json' ? JSON.stringify(data) : data;
    } else if (data) {
      options.body = data;
    }

    const response = await fetch(url, options);

    return await response.json();

  } catch (error) {
    console.log(error.message);
  }
};

export const get = request.bind({}, 'GET');
export const post = request.bind({}, 'POST');
export const patch = request.bind({}, 'PATCH');
export const put = request.bind({}, 'PUT');
export const del = request.bind({}, 'DELETE');
