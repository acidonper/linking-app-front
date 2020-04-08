#!/bin/bash
####
# Red Hat
# @author: Asier Cidon
# @date: 20200330
####
#
# Process template to deploy a NodeJS App (Linking-app-images)
#

usage() {
echo "Usage: $0 <project_name> <git_user> <git_password> <openshift_domain>"
echo "Example:"
echo "   sh linking-app-front-template-deploy.sh linking-app linkingappspain pass123 example.com"
exit 1
}

[[ $# -eq 0 ]] && usage


PROJECT_NAME=$1
DOMAIN=$4
SERVICE_NAME="linking-app-front"
SERVICE_GIT_URL="https://github.com/acidonper/linking-app-front.git"
SERVICE_GIT_USER=$2
SERVICE_GIT_PASSWORD=$3
BACK_SERVICE="https://linking-app-back-${PROJECT_NAME}.${DOMAIN}/"
CHAT_SERVICE="https://linking-app-chat-${PROJECT_NAME}.${DOMAIN}/"


# Create a deployment config object charged with the container creation and inject environment variables 
oc process -f linking-app-front-template.yaml  \
-p NAMESPACE=$PROJECT_NAME \
-p SERVICE_NAME=$SERVICE_NAME  \
-p SERVICE_GIT_URL=$SERVICE_GIT_URL \
-p SERVICE_GIT_USER=$SERVICE_GIT_USER  \
-p SERVICE_GIT_PASSWORD=$SERVICE_GIT_PASSWORD \
-p REACT_APP_LINKING_APP_CHAT_URL=$CHAT_SERVICE \
-p REACT_APP_LINKING_APP_BACK_URL=$BACK_SERVICE | oc create -f - -n $PROJECT_NAME

# Start build image
oc start-build bc/$SERVICE_NAME -n $PROJECT_NAME

# Wait for previous process
sleep 900

# Start deployment process
oc rollout latest $SERVICE_NAME -n $PROJECT_NAME




