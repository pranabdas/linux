---
title: CI/CD with Jenkins
---

## Installing Jenkins

Install jenkins by following the instructions specific to your operating system
of choice - [Installing Jenkins](https://www.jenkins.io/doc/book/installing/).

We can use bellow commands to install Jenkins in RHEL 9 system:

```bash
dnf install -y wget java-17-openjdk
wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo
rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io-2023.key
dnf install -y jenkins
```

Then we can use systemd to start the jenkins service:
```bash
service jenkins start
```

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

Alternatively, we could share an existing JENKINS_HOME data directory with the
container.

```bash
export JENKINS_HOME=/workspaces/jenkins_home
docker run -d --rm -p 8080:8080 -v $JENKINS_HOME:/var/lib/jenkins -e JENKINS_HOME=/var/lib/jenkins jenkins/jenkins:lts
```


## Jenkins CLI tool

When the Jenkins server is running, the CLI tool can be downloaded from:
`$JENKINS_URL/jnlpJars/jenkins-cli.jar`.

```bash
wget http://localhost:8080/jnlpJars/jenkins-cli.jar
chmod +x jenkins-cli.jar
```

Perhaps the most important command: getting help.
```bash
java -jar /usr/bin/jenkins-cli.jar -s http://localhost:8080 -auth $JENKINS_USER:$SECRET help
```

List installed plugins:
```bash
java -jar /usr/bin/jenkins-cli.jar -s http://localhost:8080 -auth $JENKINS_USER:$SECRET list-plugins
```

Install a plugin:
```bash
java -jar /usr/bin/jenkins-cli.jar -s http://localhost:8080 -auth $JENKINS_USER:$SECRET install-plugin <plugin-name>
java -jar /usr/bin/jenkins-cli.jar -s http://localhost:8080 -auth $JENKINS_USER:$SECRET install-plugin git
```

Update Jenkins plugins ([ref](https://stackoverflow.com/a/25647793)):
```bash
UPDATE_LIST=$( java -jar /root/jenkins-cli.jar -s http://localhost:8080/ -auth $JENKINS_USER:$SECRET list-plugins | grep -e ')$' | awk '{ print $1 }' );
if [ ! -z "${UPDATE_LIST}" ]; then
    echo Updating Jenkins Plugins: ${UPDATE_LIST};
    java -jar /root/jenkins-cli.jar -s http://localhost:8080/ -auth $JENKINS_USER:$SECRET install-plugin ${UPDATE_LIST};
    java -jar /root/jenkins-cli.jar -s http://localhost:8080/ -auth $JENKINS_USER:$SECRET safe-restart;
fi
```

## Backup and restore Jenkins data

See https://www.jenkins.io/doc/book/system-administration/backing-up/
