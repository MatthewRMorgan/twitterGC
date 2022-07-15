# Grab Python 3.x image
FROM python:3

# Let Python output be sent to the host computer
ENV PYTHONUNBUFFERED 1

# Define/create a working directory for the RUN/CMD/COPY commands
WORKDIR /app

# Copy the requirements for pip into the container
COPY ./src/requirements.txt /app/requirements.txt

# Install the required dependencies
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Tell Docker to listen to traffic on these ports inside the container (web & UDP video stream)
EXPOSE 1234

# Start the Pyramid web server
CMD ["python", "server.py"]
