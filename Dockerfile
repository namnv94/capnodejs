FROM ubuntu:24.04

ENV DEBIAN_FRONTEND=noninteractive

# Base packages
RUN apt-get update && apt-get install -y \
    curl \
    wget \
    git \
    python3 \
    python3-pip \
    jq \
    unzip \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Node.js 20
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs

# Semgrep
RUN pip3 install --break-system-packages semgrep

# Gitleaks
ARG GITLEAKS_VERSION=8.30.1

RUN wget -O /tmp/gitleaks.tar.gz \
    https://github.com/gitleaks/gitleaks/releases/download/v${GITLEAKS_VERSION}/gitleaks_${GITLEAKS_VERSION}_linux_x64.tar.gz \
    && tar -xzf /tmp/gitleaks.tar.gz -C /tmp \
    && mv /tmp/gitleaks /usr/local/bin/gitleaks \
    && chmod +x /usr/local/bin/gitleaks

# SAP MTA Build Tool
RUN npm install -g mbt

# Cloud Foundry CLI
RUN curl -L "https://packages.cloudfoundry.org/stable?release=linux64-binary&version=v8&source=github" \
    | tar -zx \
    && mv cf8 /usr/local/bin/cf8 \
    && mv cf /usr/local/bin/cf \
    && chmod +x /usr/local/bin/cf8 /usr/local/bin/cf


# MultiApps plugin
RUN cf add-plugin-repo CF-Community https://plugins.cloudfoundry.org && \
    cf install-plugin multiapps -f

# Verify
RUN node --version && \
    npm --version && \
    python3 --version && \
    semgrep --version && \
    gitleaks version && \
    mbt --version && \
    cf version