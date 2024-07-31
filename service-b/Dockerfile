FROM python:3.12
COPY . /app
WORKDIR /app
RUN pip install Flask==3.0.2
EXPOSE 3000
CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]