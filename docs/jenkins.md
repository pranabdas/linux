---
title: CI/CD with Jenkins
---

## Installing Jenkins

Install jenkins by following the instructions specific to your operating system
of choice - [Installing Jenkins](https://www.jenkins.io/doc/book/installing/).


## Running jenkins in docker

Pull the LTS Jenkins image:
```bash
docker pull jenkins/jenkins:lts
```

Run jenkins:
```bash
docker run --detach --publish 8080:8080 --volume jenkins_home:/var/jenkins_home --name jenkins jenkins/jenkins:lts
```

Print the initial admin password:
```bash
docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword
```

Go to http://localhost:8080, provide the above admin password. Next step, we may
select install suggested plugins.


## Jenkins CLI tool

When the Jenkins server is running, the CLI tool can be downloaded from:
`$JENKINS_URL/jnlpJars/jenkins-cli.jar`.

```bash
wget http://localhost:8080/jnlpJars/jenkins-cli.jar
chmod +x jenkins-cli.jar
```


## Backup and restore Jenkins data

See https://www.jenkins.io/doc/book/system-administration/backing-up/
