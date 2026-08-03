FROM ghcr.io/zaproxy/zaproxy:stable

USER root

# Base packages
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    wget \
    git \
    python3 \
    python3-pip \
    jq \
    unzip \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Node.js 22
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get update \
    && apt-get install -y --no-install-recommends nodejs \
    && rm -rf /var/lib/apt/lists/*

# Semgrep
RUN python3 -m pip install --no-cache-dir --break-system-packages semgrep

# Gitleaks
ARG GITLEAKS_VERSION=8.30.1

RUN wget -O /tmp/gitleaks.tar.gz \
    https://github.com/gitleaks/gitleaks/releases/download/v${GITLEAKS_VERSION}/gitleaks_${GITLEAKS_VERSION}_linux_x64.tar.gz \
    && tar -xzf /tmp/gitleaks.tar.gz -C /tmp \
    && mv /tmp/gitleaks /usr/local/bin/gitleaks \
    && chmod +x /usr/local/bin/gitleaks \
    && rm -f /tmp/gitleaks.tar.gz

# Verify
RUN node --version \
    && npm --version \
    && python3 --version \
    && semgrep --version \
    && gitleaks version \
    && java -version \
    && zap.sh -version \
    && zap-baseline.py -h > /dev/null

# Fix permissions for npm cache and zap home
RUN chown -R 1001:1001 /home/zap