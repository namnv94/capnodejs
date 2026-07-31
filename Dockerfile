FROM ubuntu:24.04

ENV DEBIAN_FRONTEND=noninteractive
# ENV ZAP_VERSION=2.16.1
# ENV ZAP_HOME=/opt/zaproxy
# ENV PATH="${ZAP_HOME}:${PATH}"

# Base packages + Java required by ZAP
RUN apt-get update && apt-get install -y \
    curl \
    wget \
    git \
    python3 \
    python3-pip \
    jq \
    unzip \
    ca-certificates \
    # openjdk-17-jre-headless \
    && rm -rf /var/lib/apt/lists/*

# Node.js 22
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get update \
    && apt-get install -y nodejs \
    && rm -rf /var/lib/apt/lists/*

# Semgrep
RUN pip3 install --break-system-packages semgrep

# Gitleaks
ARG GITLEAKS_VERSION=8.30.1

RUN wget -O /tmp/gitleaks.tar.gz \
    https://github.com/gitleaks/gitleaks/releases/download/v${GITLEAKS_VERSION}/gitleaks_${GITLEAKS_VERSION}_linux_x64.tar.gz \
    && tar -xzf /tmp/gitleaks.tar.gz -C /tmp \
    && mv /tmp/gitleaks /usr/local/bin/gitleaks \
    && chmod +x /usr/local/bin/gitleaks \
    && rm -f /tmp/gitleaks.tar.gz

# # OWASP ZAP
# RUN mkdir -p /opt \
#     && wget -O /tmp/zap.tar.gz \
#        https://github.com/zaproxy/zaproxy/releases/download/v${ZAP_VERSION}/ZAP_${ZAP_VERSION}_Linux.tar.gz \
#     && tar -xzf /tmp/zap.tar.gz -C /opt \
#     && mv /opt/ZAP_${ZAP_VERSION} /opt/zaproxy \
#     && chmod +x /opt/zaproxy/zap.sh \
#     && chmod +x /opt/zaproxy/zap-baseline.py \
#     && ln -s /opt/zaproxy/zap.sh /usr/local/bin/zap.sh \
#     && ln -s /opt/zaproxy/zap-baseline.py /usr/local/bin/zap-baseline.py \
#     && rm -f /tmp/zap.tar.gz

# Verify
RUN node --version \
    && npm --version \
    && python3 --version \
    && semgrep --version \
    && gitleaks version
    # && java -version \
    # && zap.sh -version \
    # && zap-baseline.py -h > /dev/null