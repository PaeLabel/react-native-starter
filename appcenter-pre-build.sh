#!/usr/bin/env bash
# Creates an .env from ENV variables for use with react-native-config
touch $APPCENTER_SOURCE_DIRECTORY/.env
echo 
ENV_WHITELIST=${ENV_WHITELIST:-"^REACT_APP_"}
printf "Creating an .env file with the following whitelist:\n"
printf "%s\n" $ENV_WHITELIST
set | egrep -e $ENV_WHITELIST | sed 's/^//g' > $APPCENTER_SOURCE_DIRECTORY/.env
printf "REACT_APP_APPCENTER_BUILD_ID=$APPCENTER_BUILD_ID" >> $APPCENTER_SOURCE_DIRECTORY/.env
printf "\n.env created with contents:\n\n"
cat $APPCENTER_SOURCE_DIRECTORY/.env

echo ""
echo ""
echo "##### [Task] - rename package"
echo "##### Starting rename app #####"

tempName="TempName"
realName=${REACT_APP_APP_NAME:-"EVCharger"} 

npx react-native-rename $tempName -b $REACT_APP_APP_ID
npx react-native-rename $realName -b $REACT_APP_APP_ID

echo "##### Rename package complete #####"

## Un-comment when has google-service

# echo ""
# echo ""
# echo "##### [Task] - update google-service"
# echo "Injecting secrets..."
# echo "Updating Google JSON"

# GOOGLE_SERVICES_JSON=$APPCENTER_SOURCE_DIRECTORY/android/app/google-services.json
# touch $GOOGLE_SERVICES_JSON

# echo $REACT_APP_GOOGLE_SERVICES_JSON > $GOOGLE_SERVICES_JSON

# sed -i -e 's/\\"/'\"'/g' $GOOGLE_SERVICES_JSON
# sed -i -e 's/REACT_APP_GOOGLE_SERVICES_JSON.*/REACT_APP_GOOGLE_SERVICES_JSON=-1/' $APPCENTER_SOURCE_DIRECTORY/.env

# echo "GOOGLE_SERVICES_JSON content:"
# cat $GOOGLE_SERVICES_JSON

# echo "Updating Google plist"
# GOOGLE_SERVICES_PLIST=$APPCENTER_SOURCE_DIRECTORY/ios/GoogleService-Info.plist
# touch $GOOGLE_SERVICES_PLIST

# echo $REACT_APP_GOOGLE_SERVICES_PLIST > $GOOGLE_SERVICES_PLIST

# sed -i -e 's/\\"/'\"'/g' $GOOGLE_SERVICES_PLIST
# sed -i -e 's/REACT_APP_GOOGLE_SERVICES_PLIST.*/REACT_APP_GOOGLE_SERVICES_PLIST=-1/' $APPCENTER_SOURCE_DIRECTORY/.env

# echo "GOOGLE_SERVICES_PLIST content:"
# cat $GOOGLE_SERVICES_PLIST

# echo "Finished update google service."
